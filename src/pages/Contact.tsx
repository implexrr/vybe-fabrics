const Contact = () => {
  return (
    <section className="contactPage">
      <h1 className="contactHeader">Slide Into Our Inbox</h1>
      <p className="contactSubhead">
        Questions? Collabs? Existential crises? We might answer. Depends on the mood and the moon phase.
      </p>

      <form className="contactForm">
        <label htmlFor="name">Name (or alias)</label>
        <input id="name" name="name" placeholder="Who even are you?" required type="text" />

        <label htmlFor="email">Email (we won’t ghost… maybe)</label>
        <input id="email" name="email" placeholder="you@thevoid.com" required type="email" />

        <label htmlFor="message">What’s the Vybe?</label>
        <textarea id="message" name="message" placeholder="Tell us your truth or pitch your weird collab idea..." required rows={5}></textarea>

        <button className="sendBtn" type="button">Send It (Soft Launch)</button>
      </form>
    </section>

  )
}

export default Contact
// TDL

