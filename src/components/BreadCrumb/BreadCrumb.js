import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';

export function BreadCrumb(){
    return(
        <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/user-research">Industry Portfolio</BreadcrumbItem>
            <BreadcrumbItem active>Performance benchmarking</BreadcrumbItem>
        </Breadcrumb>
    );
}

export default BreadCrumb;            
            