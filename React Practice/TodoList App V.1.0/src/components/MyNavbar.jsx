function MyNavbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Todo List</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </>
}

export default MyNavbar;