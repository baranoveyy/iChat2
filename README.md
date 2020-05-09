# iChat2

1. https://aws-amplify.github.io/docs/ -> create an aws account
2. npm install -g @aws-amplify/cli
3. amplify configure
	- region: eu-central-1
	- enter user
	- get access key id
	- get secret access
4. amplify init
5. add these lines to index.js
```
-----------index.js--------------
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
```

6. amplify add auth
7. amplify add api
8. amplify push

## Schema:
```
type User @model {
  id: ID!
  username: String!
  conversations: [ConvoLink] @connection(name: "UserLinks")
  messages: [Message] @connection(keyName: "byUser", fields: ["id"])
	createdAt: String
	updatedAt: String
}

type Conversation @model (subscriptions: null) {
  id: ID!
  messages: [Message] @connection(name: "ConvoMsgs", sortField: "createdAt")
  associated: [ConvoLink] @connection(name: "AssociatedLinks")
  name: String!
  members: [String!]!
	createdAt: String
	updatedAt: String
}

type Message @model (subscriptions: null)
  @key(name: "byUser", fields: ["authorId", "content"]) {
  id: ID!
  author: User @connection(fields: ["authorId"])
  authorId: ID!
  content: String!
  conversation: Conversation! @connection(name: "ConvoMsgs", sortField: "createdAt")
  messageConversationId: ID!
	createdAt: String
	updatedAt: String
}

type ConvoLink @model (subscriptions: null) {
  id: ID!
  user: User! @connection(name: "UserLinks", keyField: "convoLinkUserId")
  convoLinkUserId: ID!
  conversation: Conversation! @connection(name: "AssociatedLinks", keyField: "convoLinkConversationId")
  convoLinkConversationId: ID!
	createdAt: String
	updatedAt: String
}

type Subscription {
  onCreateConvoLink(convoLinkUserId: ID!): ConvoLink
    @aws_subscribe(mutations: ["createConvoLink"])
  onCreateMessage(messageConversationId: ID!): Message
    @aws_subscribe(mutations: ["createMessage"])
}
```
