import quill_hamburger from "../public/images/quill_hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import title from "../pages/api/navbarcontent.json";
import logofont from "../styles/generalstyles/fonts.module.scss";

export const HomeNavTitle = () => {
	return (
		<div className="container-fluid mb-1">
			<div className="row">
				{title.landingpage.map((navbar) => {
					return (
						<div
							className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
							key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const TitiNavTitle = () => {
	return (
		<div className="container-fluid mb-1">
			<div className="row">
				{title.meettiti.map((navbar) => {
					return (
						<div
							className="col-sm-12 col-md-12 col-lg-12 p-0 m-0"
							key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const ConsultNavTitle = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				{title.consulting.map((navbar) => {
					return (
						<div
							className="col-sm-12 col-md-12 col-lg-12 p-0 m-0 "
							key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const EntrepreneurNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.entrepreneur.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const BookNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.books.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const AbegWhoSendMeNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.AbegWhoSendMe.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const RandomThoughtsV1NavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.RandomThoughtsV1.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const RandomThoughtsV2NavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.RandomThoughtsV2.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export const ThirdBookNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.ThirdBook.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const PodcastNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.podcast.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const MusingNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.musing.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const ContactNavTitle = () => {
	return (
		<div className="container-fluid ">
			<div className="row">
				{title.contact.map((navbar) => {
					return (
						<div className="col-sm-12 col-md-12 col-lg-12 p-0 " key={navbar.id}>
							<Navbar {...navbar}></Navbar>
						</div>
					);
				})}
			</div>
		</div>
	);
};

interface topic {
	heading: string;
}

const Navbar = (props: topic) => {
	const { heading } = props;
	return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className={`navbar-brand ${logofont.logofontfamily}`} href="/">
            {/* <Link className={`navbar-brand ${globalstyles.logofont}`} href="/"> */}
            Titilayo
          </Link>
          <h6 className="text-white nav-link mt-2">{heading}</h6>
          <Image
            src={quill_hamburger}
            // type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            width={40}
            alt=""
          />

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link
                href="/"
                className={`offcanvas-title navbar-brand `}
                // className={`offcanvas-title navbar-brand ${globalstyles.logofont}`}
                id="offcanvasDarkNavbarLabel"
              >
                Titilayo
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/meettiti"
                  >
                    Titi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/consulting">
                    Consulting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/entrepreneurship">
                    Entrepreneur
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/books">
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/podcast">
                    Podcast
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/musing">
                    Musing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const ErrorNav = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className={`navbar-brand ${logofont.logofontfamily}`} href="/">
						{/* <Link className={`navbar-brand ${globalstyles.logofont}`} href="/"> */}
						Titilayo
					</Link>

					<Image
						src={quill_hamburger}
						// type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasDarkNavbar"
						aria-controls="offcanvasDarkNavbar"
						width={40}
						alt=""
					/>

					<div
						className="offcanvas offcanvas-end text-bg-dark"
						tabIndex={-1}
						id="offcanvasDarkNavbar"
						aria-labelledby="offcanvasDarkNavbarLabel">
						<div className="offcanvas-header">
							<Link
								href="/"
								className={`offcanvas-title navbar-brand `}
								// className={`offcanvas-title navbar-brand ${globalstyles.logofont}`}
								id="offcanvasDarkNavbarLabel">
								Titilayo
							</Link>
							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="offcanvas"
								aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										href="/">
										Home
									</Link>
								</li>

								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										href="/meettiti">
										Titi
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/consulting">
										Consulting
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/entrepreneurship">
										Entrepreneur
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/books">
										Books
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/podcast">
										Podcast
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/musing">
										Musing
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link active" href="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
