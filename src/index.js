document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (document.querySelector("#new-task-description").value === '') {
      alert('Please add a task')
    }else{
      if (document.getElementById('time-input').value === '') {
        alert('Please add completion time')
      } else {
        buildToDo(document.querySelector("#new-task-description").value)
        completedTime()
        form.reset()
        
      }
      
    }
    
    
    // form.reset()
  })
});
function buildToDo(todo) {
  let endTime = document.createElement('p')
  let startTime = document.createElement('p')
  let li = document.createElement('li')
  let btn = document.createElement('button')
  startTime.textContent = getTime()
  endTime.textContent = completedTime()
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'Remove'
  li.textContent = `${todo} `
  li.appendChild(startTime)
  li.appendChild(endTime)
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  
}
function handleDelete(e) {
  e.target.parentNode.remove()
}
function getTime(){
  const today = new Date()
  return `Time added:${today.getHours()}:${today.getMinutes()}`
}
function completedTime(){
 let doTime = document.getElementById('time-input').value
 
 return `To be completed by :${doTime}`
 
  
}


