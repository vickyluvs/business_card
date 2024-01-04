function Info() {
  return (
    <section className="info--container">
      <div className="info--image-div">
        <img
          src="../assets/vicky.png"
          className="info--image"
          alt="vicky's profile"
        />
      </div>

      <div className="info--header">
        <h4>Hello! I'm Victoria Smith</h4>
        <h3 className="info--h3">Frontend Developer</h3>
      </div>

      <form action="mailto:hturay1@gmail.com">
        <input type="submit" value="Contact" />
      </form>
    </section>
  );
}
export default Info;
