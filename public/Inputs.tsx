function Inputs(){
  return (
      <div className="input-group mb-3">
        <input type="search" placeholder="Monster..." className="form-control" aria-label="Text input with dropdown button" />
        <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="default" className="form-check-label">Default</label>
              <input type="radio" id="default" name="sort" className="form-check-input" />
            </div>
          </li>
          <hr className="dropdown-divider" />
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="low" className="form-check-label">Price (Lowest)</label>
              <input type="radio" id="low" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="high" className="form-check-label">Price (Highest)</label>
              <input type="radio" id="high" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="a-z" className="form-check-label">A-Z</label>
              <input type="radio" id="a-z" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="z-a" className="form-check-label">Z-A</label>
              <input type="radio" id="z-a" name="sort" className="form-check-input" />
            </div>
          </li>
        </ul>
      </div>
  )
}