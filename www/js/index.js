FCMPlugin.getToken(function(token) {
    console.log("FCM Token: " + token);
    // You can store this token or send it to your server for further use
}, function(err) {
    console.error("Error retrieving FCM token: " + err);
});

// Handle incoming notifications
FCMPlugin.onNotification(function(data) {
    console.log("Notification data: " + JSON.stringify(data));

    if (data.wasTapped) {
        // Notification received in background
        alert("Background Notification: " + JSON.stringify(data));
    } else {
        // Notification received in foreground
        alert("Foreground Notification: " + JSON.stringify(data));
    }
}, function(msg) {
    console.log("Notification callback success: " + msg);
}, function(err) {
    console.error("Notification callback error: " + err);
});