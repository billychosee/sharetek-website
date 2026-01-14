import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      company,
      product,
      description,
    } = await req.json();

    // SMTP configuration
    const SMTP_CONFIG = {
      HOST: "mail.smatpay.africa",
      PORT: 465, // Use 465 for 'secure: true'
      USER: "noreply@smatpay.africa",
      PASS: "?jPvp_cS3cObf0pG",
    };

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.HOST,
      // You must remove Number() when the port is already a number
      port: SMTP_CONFIG.PORT, 
      secure: true,
      auth: {
        user: SMTP_CONFIG.USER,
        pass: SMTP_CONFIG.PASS,
      },
      
    });

    // Define email options
    const mailOptions = {
      from: `"Sharetek Contact" <noreply@smatpay.africa>`,
      to: "info@Sharetekgroup.com",
      subject: "Sharetek Contact Form",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${mobileNumber || "N/A"}
        Company: ${company || "N/A"}
        Inquiry Type: ${product || "N/A"}
        Message: ${description || "N/A"}
      `,
      html: `
        <h3>Client Email</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobileNumber || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Inquiry Type:</strong> ${product || "N/A"}</p>
        <p><strong>Message:</strong><br/>${description || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "✅ Your message was sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // You should use this section to check the exact error message in your live logs!
    console.error("❌ Error connecting to the server.", error); 
    return new Response(
      JSON.stringify({ success: false, error: "❌ There was a problem sending your message." }),
      { status: 500 }
    );
  }
}
