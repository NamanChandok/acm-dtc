import { sendEmail } from "@/app/utils/mail.utils";
import { rtdb } from "@/firebase";
import { NextResponse, NextRequest } from "next/server";
import { ref, set, get, child } from "firebase/database";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const email = body.email;

    const rEmail = email.replace(/\./g, ',');

    const emailRef = ref(rtdb, 'subscribers');
    
    const snapshot = await get(child(emailRef, rEmail))
    
    if (snapshot.exists()) {
        return NextResponse.json({ message: "Already subscribed" });
    }

    await set(child(emailRef, rEmail), {
        subscribedAt: new Date().toISOString()
    })


    const sender = {
        name: "ACM | Delhi Technical Campus",
        address: process.env.MAIL_USERNAME!
    };

    const recepients = [{ 
        name: "User",
        address: email
    }];

    try {
        await sendEmail({
            sender,
            recepients,
            subject: "ACM | DTC - Thank you for subscribing",
            html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Thank You for Subscribing</title><style>body {font-family: Arial, sans-serif;background-color: #f4f4f4;margin: 0;padding: 0;}.container {max-width: 600px;margin: 50px auto;background-color: #ffffff;padding: 20px;border-radius: 8px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}.header {text-align: center;padding-bottom: 20px;}.header h1 {margin: 0;color: #333333;}.content p {color: #666666;line-height: 1.6;}.footer {text-align: center;padding-top: 20px;color: #999999;font-size: 12px;}</style></head><body><div class="container"><div class="header"><img src="https://acm-dtc.vercel.app/logo.png" alt="ACM@DTC Logo" style="max-width: 200px; margin-bottom: 20px;"><h1>Thank You for Subscribing!</h1></div><div class="content"><p>Hi there,</p><p>We are excited to have you on board. We are a community of tech enthusiasts and we believe in learning and growing together. Stay tuned for our upcoming events and workshops. If you have any queries, feel free to reach out to us. Cheers!</p><p>Best regards,<br>ACM@DTC Team</p></div><div class="footer"><p>&copy; 2024 ACM@DTC. All rights reserved.</p></div></div></body></html>',
            message: "Welcome to ACM | Delhi Technical Campus. We are excited to have you on board. We are a community of tech enthusiasts and we believe in learning and growing together. Stay tuned for our upcoming events and workshops. If you have any queries, feel free to reach out to us. Cheers!"
        });
        return NextResponse.json({ message: "Mail sent successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Mail not sent" }, {status:  500});
    }
}