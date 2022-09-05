import "./footer.scss";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright. Bekmyrza uulu Janarbek. &copy; {date.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
