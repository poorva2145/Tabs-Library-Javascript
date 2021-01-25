export function initialize_tabs(dom_element, myArray) {
  let current_tab_index = 0;
  const n = myArray.length;

  // create tab link element
  for (let index = 0; index < myArray.length; index++) {
    const title = myArray[index].title;

    const btn = document.createElement('button');
    btn.innerHTML = title;
    btn.setAttribute("class", "tablink");
    btn.setAttribute("id", `${index}_tab`);

    if (index == 0) {
      btn.style.color = "white";
      btn.style.backgroundColor = "#0d6efd";
    }
    else {
      btn.style.color = "#0d6efd";
      btn.style.backgroundColor = "white";
    }

    dom_element.appendChild(btn);
  }

  // create tab content element
  for (let index = 0; index < myArray.length; index++) {
    const content = myArray[index].content;

    const content_div = document.createElement('div');
    content_div.innerHTML = content;
    content_div.setAttribute("class", "tabcontent");
    content_div.setAttribute("id", `${index}`);

    if (index == 0) {
      content_div.style.display = "block";
    }
    else {
      content_div.style.display = "none";
    }

    dom_element.appendChild(content_div);
  }

  function ChangeTab(next_index) {
    const CurrentTabcontent = document.getElementById(`${current_tab_index}`);
    const CurrentTablink = document.getElementById(`${current_tab_index}_tab`);

    CurrentTabcontent.style.display = "none";
    CurrentTablink.style.color = "#0d6efd";
    CurrentTablink.style.backgroundColor = "white";

    const nextTabContent = document.getElementById(`${next_index}`);
    const nextTablink = document.getElementById(`${next_index}_tab`);

    nextTabContent.style.display = "block";
    nextTablink.style.color = "white";
    nextTablink.style.backgroundColor = "#0d6efd";

    current_tab_index = next_index;
  }

  // add event listener and corresponding logic
  const tablinks = document.getElementsByClassName("tablink");
  for (let j = 0; j < tablinks.length; j++) {
    tablinks[j].addEventListener('click', () => {
      ChangeTab(j);
    });
  }

  document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    let next_index;
    if (key === "ArrowLeft" || key === "ArrowRight") {
      if (key === "ArrowLeft") {
        next_index = (current_tab_index - 1 + n) % n;
      }
      else {
        next_index = (current_tab_index + 1) % n;
      }

      ChangeTab(next_index);
    }
  });

}