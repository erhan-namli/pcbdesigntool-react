import React from 'react'
import ReactList from 'react-list';


const MicroblockList = () => {
    var state = {
        mcu: [
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""},
            {"name" : ""}
            ],
            capacitors: [
            {"name" : ""},
            {"name" : ""},
            {"name" : ""}
            ]
         }

     const renderItem = (index, key) => {
        return <div key={key}>{state.mcu[index].name}</div>;
      }

      const componentWillMount = () => {

        handleAccounts();

      }
    
      const handleAccounts = (mcu) => {
        this.setState({mcu});
      }
    

  return (
    <div>

<div style={{overflow: 'auto', maxHeight: 400}}>

        <ReactList
            itemRenderer={renderItem}
            length={state.mcu.length}
            type='uniform'
        >

        </ReactList>

</div>
</div>
  )
}

export default MicroblockList