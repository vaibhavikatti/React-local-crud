import React,{useEffect, useState} from 'react'
import { readAllTask } from '../data/task';
import { NavLink } from 'react-router-dom';
import { deleteTask } from '../data/task';
import { toast } from 'react-toastify';
function Home(){
    const [tasks,setTasks]=useState([]);
    
    useEffect(()=>{
        const data = readAllTask()
        console.log('tasks',data);
        setTasks(data);
    },[])

    const deleteHandler =async (id)=>{
        try {
            if(window.confirm(`are you sure to delte ${id}`)){
                   await deleteTask(id);
                
            }else{
                toast.warning('deleted` Successfully');
            }
        } catch (err) {
           toast.error(err.message); 
        }
    }

    return(
        <div className="container">
            <div className="row">
              <div className="col-md-12 text-center"><div className="display-3 text-dark">Home</div>
                </div>  
            </div>
            <div className="row">
                {
                    tasks && tasks.map((item,index)=>{
                        return(
                            <div className="col-md-4 mt-4" key={index}>
                                 <div className="card">
                                    <div className="card-header">
                                       <h5 className="text-success text-center">{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Start Date</strong>
                                                <span className="text-success float-end">{item.start}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>End Date</strong>
                                                <span className="text-success float-end">{item.end}</span>
                                            </li>
                                            <li className="list-group-item">
                                                <strong> Description </strong>
                                                <span className="text-success float-end">{item.desc}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <NavLink to={`/update/${item.id}`} className="btn btn-info">
                                            <i className="bi bi-pencil"></i>
                                        </NavLink>
                                        <NavLink  onClick={()=>{deleteHandler(item.id)}} className="btn btn-danger float-end">
                                            <i className="bi bi-trash"></i>
                                        </NavLink>
                                    </div>
                                   
                                 </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home