
export const NavPage = ({ page, setPage }) => {


  const onNextPage = () => {
    setPage(page + 1)
  };

  const onPreviousPage = () => {
    if (page == 1) return setPage(1);
    setPage(page - 1)
  };

  return (
    <div className="">

      <nav >
        <ul className="pagination d-flex flex-wrap justify-content-center gap-3">
          <li className="page-item">
            <button className="page-link" tabIndex="-1" aria-disabled="true" onClick={onPreviousPage}>
              ⬅️ Anterior
            </button>
          </li>

          <li className="page-item">
            <button className="page-link " onClick={onNextPage}>
              Próxima ➡️
            </button>
          </li>
        </ul>
      </nav>

    </div >
  )
}
