import React from 'react'

const Paging = ({corr, total, setCorrentPage}) => {

    let label = corr === total ? "Prev" : "Next";

    const onClickHandler = () => {
        let newpage;

        if(corr === total) {
            newpage = corr - 1;
        } else { 
            newpage = corr + 1;
        }

        setCorrentPage(newpage);
        console.log(newpage);
    }
  return (
    <button className='btn btn-primary mx-4'  onClick={onClickHandler}>{label}</button>
  )
}

export default Paging;