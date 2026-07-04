export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <p>Built for {name}.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
