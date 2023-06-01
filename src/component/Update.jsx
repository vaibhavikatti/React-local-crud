import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { readSingleTask, updateTask } from '../data/task';

function Update(){

    const [task,setTask] = useState({
        title:'',
        start:'',
        end:'',
        desc:''

    });
    const params = useParams();
     console.log('id=',params.id);

     useEffect(()=>{
        const data = readSingleTask(params.id);
        setTask(data);
     },[])


     const readValue = (event) => {
        const { name, value } = event.target 
        console.log('name=',name,"value=",value);
        setTask({...task, [name]:value})
      }
  
      const submitHandler= async (event)=>{
          event.preventDefault();
         console.log('update task',task);
         updateTask(params.id , task);
      }
    return(
        <div className="container">
            <div className="row">
              <div className="col-md-12 text-center"><div className="display-3 text-dark">Update</div>
                </div>  
            </div>
            <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <div className="card">
                        <div className="card-body">
                        <form autoComplete='off' onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="title">Task</label>
                                <input type="text" name='title' id='title' value={task.title} onChange={readValue} className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                            <label htmlFor="title">Task-Start-Date</label>
                                <input type="date" name='start' id='start' value={task.start} onChange={readValue}  className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                            <label htmlFor="title">Task-End-Date</label>
                                <input type="date" name='end' id='end' value={task.end} onChange={readValue}  className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                            <label htmlFor="title">Description</label>
                                <textarea  name='desc' id='desc' value={task.desc} onChange={readValue}  cols={30} rows={5} className='form-control' required />
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" value={"Update task"} className='btn btn-success'  />
                            </div>
                        </form>

                        </div>
                      </div>
                    </div>
                </div>
        </div>
    )
}

export default Update