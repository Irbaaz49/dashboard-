import React from "react"
import { GridComponent, ColumnsDirective, ColumnDirective,Search, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

import { Header } from '../components';


const Orders =()=>{
    const toolbarOptions = ['Search'];
    return(
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

        <Header category="Page" title="Orders" />        
<GridComponent
dataSource={ordersData}
allowPaging
allowSorting
allowFiltering
toolbar={toolbarOptions}
>
    <ColumnsDirective>
    {
        ordersGrid.map((item, indes)=><ColumnDirective key={indes} {...item}/>)

    }
    </ColumnsDirective>
    <Inject services={[Resize, Sort,Search, Page, Filter]}/>
    </GridComponent>


        </div>
    )
}

export default Orders