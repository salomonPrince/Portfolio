<?php
// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email address
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Check if form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize form data
    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $message = sanitize_input($_POST['message']);

    // Validate email address
    if (!is_valid_email($email)) {
        echo "Invalid email address.";
        exit;
    }

    // Set recipient email address
    $to = "salomonbaraka@gmail.com";

    // Set email subject
    $subject = "New message from $name";

    // Construct email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set headers
    $headers = "From: $email";

    // Attempt to send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. We'll get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    // If the request method is not POST, redirect back to the contact page
    header("Location: index.html#contact");
    exit;
}
?>
