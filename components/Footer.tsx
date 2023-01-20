const Footer = () => {
	return (
		<>
			{/* mobile footer */}
			<div className="text-white container-fluid d-sm-block d-md-none">
				<h1 className="mb-5">Titilayo Ekundayo</h1>

				<div className="d-flex justify-content-center">
					<p className="me-3">Meet Titi</p>
					<p className="me-3">Podcast</p>
					<p>Entrepreneur</p>
				</div>
				<div className="d-flex justify-content-center">
					<p className="me-3">Books</p>
					<p className="me-3">Musing</p>
					<p>Consulting</p>
				</div>
				<div className="d-flex justify-content-center">
					<p className="me-3">Contact</p>
					<p>Subscribe to Newsletter</p>
				</div>

				<div className="mt-4 text-center">
					<p className="mb-0">&copy; 2022 Titi Ekundayo. All Rights Reserved</p>
					<p>Privacy Policy</p>
				</div>
			</div>

			{/* desktop footer */}
			<div className="text-white text-center container-fluid d-none d-sm-none d-md-block">
				<div className="row">
					<div className="col-md-4">
						<h1>Titilayo Ekundayo</h1>
					</div>
					<div className="col-md-4">
						<div>
							<div>
								<p>Meet Titi</p>
								<p>Books</p>
							</div>
							<div>
								<p>Podcast</p>
								<p>Musing</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<p>Entrepreneur</p>
						<p>Consulting</p>
						<p>Contact</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
