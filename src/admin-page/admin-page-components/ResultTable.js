import React, { useState, useEffect } from 'react';
import TableButtons from './TableButtons';

import './ResultTable.css';

const ResultTable = ({items, head, type, setRefresh}) => {
  const [innerItems, setInnerItems] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log('refreshtable')
  // },[refresh])

  const cutText = text => {
    return `${text.slice(0, 200)}...`;
  }

  if (items && items.length > 0 && head) {
    return (
      <div className="container container__result-table">
        <table className="table table__result-table" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>  
              {head.map((title, index) => {
                return (
                  <th className="table-header table-header__result-table">{title}</th>
                )
              })}  
              <th className="table-header table-header__result-table"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className="table-row table-row-posts">        
                  {type === "post" && <td className="table-description table-description__result-table">{cutText(item.text)}</td>}    
                  {type === "user" && <td className="table-description table-description__result-table">{item.email}</td>}
                  <td className="table-description table-description__result-table--button-container">
                    <TableButtons 
                      itemId={item.id}
                      setRefresh={setRefresh}
                      type={type}
                    />
                  </td>
                </tr>
              )
            })}   
          </tbody>
        </table>
      </div>
    )
  } 
  else if(isLoading) {
    return (
      <div className="container">
        <div className="empty-table__wrapper">
          <h2 className="empty-table__heading">Loading...</h2>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <div className="empty-table__wrapper">
          <h2 className="empty-table__heading">There's no articles yet</h2>
        </div>
      </div>
    )
  } 
}

export default ResultTable;