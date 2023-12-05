import React from "react";
/**
 * Renders information about the user obtained from MS Graph 
 * @param props
 */
export const ListData = (props) => {
  console.log(props.siteId);
  console.log(props.listId);
  console.log(props.listItems);

  const listItems = props.listItems.map((item) => {return <li key={item.id}>{item.fields.Title}</li>});

  return (
    <div id="profile-div">
      <p>
        <strong>Site Id:</strong> 
        <br/>{props.siteId}
      </p>
      <p>
        <strong>List Id:</strong>
        <br/>
        {props.listId}
      </p>            
      <strong>List Items </strong>
      <ul>
        { listItems }
      </ul>           
    </div>
  );
};