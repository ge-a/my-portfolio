export default function ContactMe() {
    // vCard data for your contact
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Andrew Ge
EMAIL:andyshge@gmail.com
TEL;TYPE=CELL:9787788908
END:VCARD
    `.trim();

    // Create a Blob from the vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const vCardUrl = URL.createObjectURL(blob);

    return (
        <section id="ContactMe" className="contact--section">
            <div className="sub--title">
                <h2>Contact Me!</h2>
            </div>
            <div className="contact-info">
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <a href="mailto:andyshge@gmail.com">
                        Email: andyshge@gmail.com
                    </a>
                </p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>Phone: (978)-778-8908</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <a href={vCardUrl} download="Andrew_Ge.vcf">
                        Save Contact
                    </a>
                </p>
            </div>
        </section>
    );
}
