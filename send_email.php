<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $quotenum = $_POST["quotenum"];
    $quantity = $_POST["quantity"];
    $interest = $_POST["interest"];
    $description = $_POST["description"];

    // Build the email message
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Quote Number: $quotenum\n";
    $message .= "Quantity: $quantity\n";
    $message .= "Interest: $interest\n";
    $message .= "Description: $description\n";

    // Set the recipient email address
    $to = "theneshnesh@gmail.com"; // Replace with your email address

    // Set the subject of the email
    $subject = "New Inquiry";

    // Set additional headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);
}
?>
