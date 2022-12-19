import React from 'react'
import { CartState } from '../Context/Context';
import "./Filter.css"

const Filter = () => {

    const {
        productDispatch,
        productState: { byMale, byFemale, byWhite, byFolded, searchQuery },
    } = CartState();


    return (
        <div className='filter-container'>
            <h2>Filter Products</h2>
            <hr />
            <div className='filter'>
                <p>Gender</p>
                <span>
                    <input type="radio" onChange={() =>
                        productDispatch({
                            type: "MALE",
                        })
                    }
                        checked={byMale}
                    />
                    <span>Male</span>
                </span>
                <span>
                    <input type="radio" onChange={() =>
                        productDispatch({
                            type: "FEMALE",
                        })
                    }
                        checked={byFemale} />
                    <span>Female</span>
                </span>
                <p>Category</p>
                <span>
                    <input type="checkbox" onChange={() =>
                        productDispatch({
                            type: "WHITE",
                        })
                    }
                        checked={byWhite} />
                    <span>White</span>
                </span>
                <span>
                    <input type="checkbox" onChange={() =>
                        productDispatch({
                            type: "FOLDED_SHLIEVES",
                        })
                    }
                        checked={byFolded} />
                    <span>Folded shleives</span>
                </span>
                <button className='clear-filter' onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }>Clear Filter</button>
            </div>
        </div>
    )
}

export default Filter
