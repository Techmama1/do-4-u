# Do4U

Team Members:
Carla Thurston
Adams Lowe
Dylan Marinari
Travis Copeland
Mason Vickery

**Deployed App:** https://do-4-u.herokuapp.com/

*Do-4-U takes the hassle out of running everyday errands! You want more time? You’re tired of battling traffic or waiting in long lines?  Great!  You no longer have to do any of these annoying things!  Do-4-U frees up your time by passing your errands onto a runner who will take care of those pesky to-do items!  The runner gets to be an independent contractor, working for themselves, choosing their own schedule.  Do-4-U, does a little something for U and U.*


**Technologies**
- ReactJS
- MongoDB (database)
- Stripe (payment system)
- Bcrypt and Passport (user authentication)


**User Experience:**
- The user posts their to-do list
- Each to-do list can hold up to 4 items
- The user sets an expiration time for when the to-do list has to be accomplished by
- The user sets the amount of payment for each to-do item accomplished (as well as a total amount for the entire to-do list)
- The user may elect to create multiple to-do lists (if he/she has more than 4 items)
- The user makes an up-front credit card payment using stripe 


**Runner Experience:**
- Runner accepts some or all of the user's list
- Runner is provided the user's contact info for communication purposes
- Once each item is complete, the runner uploads a picture of the receipt (if applicable) and marks the item as "complete"
- The runner is paid out by Do-4-U


**Rating System:**
- Both the user and the runner have the opportunity to rate each other
- Rating are displayed on the user and runner profile pages
