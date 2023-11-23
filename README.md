
## Deploying to Components

### Components

- Components are Stored in the /components/birl this folder contains all components used in the project

#### Adding compinents to your store pages
- AnnouncementBar
- Cart Widget
- Product CTA
- Product Widget
Can be placed on your store pages by adding the reference to the component in the page file.

Birl Trade-in Button can be added to the Orders page in the account by adding the reference to the component  as below

in the loop of line items add the following code where line item is the item that the user would like to trade in
this component can be added in the loop as each line item will be checked to ensure that it is can be traded in
before the button is rendered your shop customer. These items are managed in the Birl Management App

<TradeInButtons item={lineItem}></TradeInButtons>

### Routes

- Routes are stored in the /routes/birl folder this folder contains all routes used in the project. 
- this will create new pages in the store to allow users to access Birl App

### Changes Required
- Where API keys are required, please use the environment key store  file to store the keys, Checking that the correct key is  referenced in the components and routes. 

### Authentication keys required

Birl Merchant Id, This will be provided by birl 
Birl API Key , This will be provided by birl

These keys are specific to your store, and marketplace and will be provided by Birl. If you operate 
in multiple marketplaces, storefronts you will be provided with a key for each marketplace. please check that the correct 
key is referenced in the components and routes. Incorrect keys will result in no items being able to elegable from
previously ordered items.

