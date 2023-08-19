const qNumber = 7;

const progressContainer = document.querySelector(".progress-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let tabs = document.querySelectorAll(".tabs li a");
let tabsArray = Array.from(tabs);
let currentActive = 1;

// -----------------multi steps------------------
for (let i = 0; i < qNumber; i++) {
  progressContainer.innerHTML += `
  <div class="circle "><i class="fa fa-file-lines"></i></div>`;
}
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let Divs = document.querySelectorAll(".content .qustions");
let DivsArray = Array.from(Divs);
let currentQusetion = 1;
let currentIndex = 0;
$(".tabs a").click((e) => {
  $(e.target).parent().css("color", "aqua");
  $(e.target).parent().siblings().css("color", "black");
  let targetQ = $(e.target).attr("href");
  $(targetQ).removeClass("d-none");
  $(targetQ).siblings().addClass("d-none");
  currentIndex = $(".tabs a").index($(e.target));
  console.log(targetQ);
  currentActive = 1;

  if ($(".tabs a").index($(e.target) != currentIndex)) {
    prev.disabled = true;
    next.disabled = false;
    currentActive = 1;
    update();
  }
  ChooseQuestion(targetQ);
  update();
  $(next).click(() => {
    ChooseQuestion(targetQ);
    update();
  });
  $(prev).click(() => {
    ChooseQuestion(targetQ);
    update();
  });
});

// ---------------next button-------------
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
  ChooseQuestion("#qustionChoose");
});
// ----------------prev button-----------------
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) currentActive = 1;
  update();
  ChooseQuestion("#qustionChoose");
});

const update = () => {
  currentQusetion = currentActive;
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 2) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

// --------------create question----------------------
let choose = document.getElementById("qustionChoose");
let TrueOrFalse = document.getElementById("trueOrFalse");
let complete = document.getElementById("complete");
let completeWithDetalis = document.getElementById("completeWithDetalis");
let matching = document.getElementById("matching");

function ChooseQuestion(type) {
  switch (type) {
    case "#qustionChoose":
      choose.innerHTML = `
  <h3>سؤال ${currentQusetion} من ${qNumber}</h3>
  <h5 class="p-3 text-white">
    اختر الاجابه الصحيحه
    <br />
    <i
      class="fa-regular fa-image fa-3x mx-3 d-none"
      style="color: white"
    ></i>
  </h5>
  <div id="options">
    <p>
      <span class="rounded-circle bg-white shadow-sm px-2 py-1"
        >1</span
      >
      الاجابه الاولي
      <br />
      <i
        class="fa-regular fa-image fa-3x mx-5 d-none"
        style="color: #000000"
      ></i>
    </p>
    <p>
      <span class="rounded-circle bg-white shadow-sm px-2 py-1"
        >2</span
      >
      الاجابه الثانيه
      <br />
      <i
        class="fa-regular fa-image fa-3x mx-5 d-none"
        style="color: #000000"
      ></i>
    </p>

    <p>
      <span class="rounded-circle bg-white shadow-sm px-2 py-1"
        >3</span
      >
      الاجابه الثالثه
      <br />
      <i
        class="fa-regular fa-image fa-3x mx-5 d-none"
        style="color: #000000"
      ></i>
    </p>
    <p>
      <span class="rounded-circle bg-white shadow-sm px-2 py-1"
        >4</span
      >
      الاجابه الرابعه
      <br />
      <i
        class="fa-regular fa-image fa-3x mx-5 d-none"
        style="color: #000000"
      ></i>
    </p>
  </div>
`;
      console.log("type" + type);

      break;
    case "#trueOrFalse":
      TrueOrFalse.innerHTML = `
    <h3>سؤال ${currentQusetion} من ${qNumber}</h3>
    <h5 class="p-3 text-white">اختر الاجابه الصحيحه</h5>
    <div class="flexRow">
      <div class="group">
        <input type="radio" name="row" id="canswer" />
        <label for="canswer">الاجابة صحيحة</label>
      </div>
      <div class="group">
        <input type="radio" name="row" id="ranswer" />
        <label for="ranswer">الاجابة خاطئة</label>
      </div>
    </div>`;
      console.log("type" + type);

      break;
    case "#complete":
      complete.innerHTML = `
        <h3>سؤال ${currentQusetion} من ${qNumber}</h3>
        <h5 class="p-3 text-white">
           اكمل النقط <input type="text" /> بالاجابة الصحيحة
          <input type="text" />
        </h5>`;
      console.log("type" + type);
      break;
    case "#completeWithDetalis":
      completeWithDetalis.innerHTML = `
        <h3>سؤال ${currentQusetion} من ${qNumber}</h3>
        <h5 class="p-3 text-white">اكتب الاجابة بالتفصيل</h5>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <textarea
                cols=""
                rows="5"
                class="d-flex flex-md-shrink-0"
              ></textarea>
            </div>
            <div class="col-12 col-lg-6">
              <button class="btn-outline-primary">
                <i class="fa-regular fa-image"></i> ادراج صورة
              </button>
              <br />
              <button class="btn-outline-primary">
                <i class="fa-regular fa-image"></i> ادراج معادلة
              </button>
            </div>
          </div>
        </div>`;
      console.log("type" + type);
      break;
    case "#matching":
      matching.innerHTML = `
        
        <h3>سؤال ${currentQusetion} من ${qNumber}</h3>
        <h5 class="p-3 text-white">اكتب الاجابة بالتفصيل</h5>
        <div class="flexRow">
          <div class="matchD">
            <span>العمود الأول</span>
            <div class="matchQ">السوال</div>
            <div class="matchQ">السوال</div>
            <div class="matchQ">السوال</div>
          </div>
          <div class="matchD">
            <span>العمود الثاني</span>
            <div class="matchQ">الاجابة</div>
            <div class="matchQ">الاجابة</div>
            <div class="matchQ">الاجابة</div>
          </div>
        </div>`;
      console.log("type" + type);
      break;
  }
}

ChooseQuestion("#qustionChoose");
// ----------------------choose-----------------------------
$(choose).click(function (e) {
  $(this).css("border", "2px solid  #3498db");
  $(this).css({ backgroundColor: "#aca4a4" });
  $(this).siblings().css("border", "none");
  $(this).siblings().css({ backgroundColor: "transparent" });
  console.log($(e.target));
});
// console.log($(choose #options));
