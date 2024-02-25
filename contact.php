
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

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

