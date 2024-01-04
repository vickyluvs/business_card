function Socials() {
  const facebookIcon = "../assets/FacebookIcon.png";
  const githubIcon = "../assets/GitHubIcon.png";
  const instagramIcon = "../assets/InstagramIcon.png";
  const linkedinIcon = "../assets/LinkedinIcon.png";

  return (
    <div className="social--icons">
      <h3>You can find me here!</h3>
      <img src={facebookIcon} alt="facebook Icon" className="social-img" />
      <img src={githubIcon} alt="github Icon" className="social-img" />
      <img src={instagramIcon} alt="instagram Icon" className="social-img" />
      <img src={linkedinIcon} alt="linkedIn Icon" className="social-img" />
    </div>
  );
}

export default Socials;
