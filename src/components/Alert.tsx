import { FC } from "react";
// import { 
//     Modal, 
//     Card, 
//     CardContent, 
//     Button,
//  } from "@mui/material";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AlertModalToggler } from "../redux/actionCreators/alertActions";
import { RootState } from '../redux/store/store';
import { IAlertState as AlertState } from '../redux/reducers/AlertReducer';


const AlertModal: FC = () => {
    const alert: AlertState = useSelector(
        (state: RootState) => state.alert
      );
    const dispatch = useDispatch();
    const hideModal = () => {
        console.log('hide model fired')
        dispatch(AlertModalToggler())
    }
    return (
        // contentClassName
        // <Modal fade={true}  dialogClassName="alert-container" style={{direction:'rtl'}}
        //     size="sm"
        //     centered
        //     isOpen={this.props.isOpen}
        //     toggle={this.props.modalToggleHandler}
        // >
        //     <ModalHeader className ="alert-header" style={{direction:'ltr', height:'25px'}} >
        //     <span className="alert-header-text">توجه</span>
        //     </ModalHeader>
        //     <ModalBody className ="alert-body" style={{ textAlign: "center", paddingTop:'.1em'}}>
        //         <Card style={{height:'80px', marginTop:'.1em', paddingTop:'.1em'}}>
        //             <CardBody style={{marginTop:'.1em', paddingTop:'.1em'}}>
        //                 <span style={{fontWeight:'bold'}}>{this.props.message}</span>
        //             </CardBody>
        //         </Card>
        //     </ModalBody>
        //     <ModalFooter className="alert-footer">
        //         <Button size="sm" color="info" onClick={() => this.hideModal()} style={{fontWeight: 'bold'}}>بستن</Button>
        //     </ModalFooter>
        // </Modal>
        <></>
    )
}
// Customizing the Modal:
// Making the modal match your brand and design is simple. 
// Use the same methods available for any react component to style a modal, including any CSS-in-js solution, 
// standard CSS, and CSS Modules. If you need to add a class to the modal dialog, use the dialogClassName property.

// const mapStateToProps = state => {
//     return {
//       isOpen: state.alert.isModalOpen,
//       message: state.alert.message,
//     };
//   };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       modalToggleHandler: () => dispatch(AlertModalToggler()),
//     };
//   };
  
export default AlertModal;