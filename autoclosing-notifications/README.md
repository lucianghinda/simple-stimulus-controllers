# Notification Controller

## How to use

Just copy the notification-controller.js in your project. 
If the project is Rails copy it under app/javascript/controllers. 

Then on the parent you will need to define `data-controller="notification"` and inside that parent you need to have 
a progress element that should have `data-target="notification.progress"`.
The progress element element should have an `id`. It does not matter which id, but needs to have an unique id. 

When the parent element is included in DOM the countdown will start and it will decrease style.width of the progress element every second. 