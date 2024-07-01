import './pageFooter.css'
export default function PageFooter() {
    return (
      <>
		<footer className="footer-section">
			<div className="container">
				<div className="row">
				<div className="col"><a href="/cookie-policy">Cookie Policy</a></div>
				<div className="col"><a href="/privacy-policy">privacy Policy</a></div>
				</div>
			</div>
		</footer>
      </>
    );
  }