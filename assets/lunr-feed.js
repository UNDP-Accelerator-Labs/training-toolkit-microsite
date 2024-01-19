---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('sdg')
  this.field('tags')
  this.field('rblac_priorities')
  this.field('signature_solutions')
  this.field('enablers')
  this.field('url')
  this.ref('id')
});

let tags = []
let sdg = []
let rblac_priorities = []
let signature_solutions = []
let enablers = []

// rblac_priorities, signature_solutions, enablers

{% assign count = 0 %}
{% for post in site.pages %}
{% unless post.url contains 'assets/' %}
index.add({
    title: {{post.title | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{ post.tags | jsonify }},
    sdg: {{ post.sdg | jsonify }},
    enablers: {{ post.enablers | jsonify }},
    signature_solutions: {{ post.signature_solutions | jsonify }},
    rblac_priorities: {{ post.rblac_priorities | jsonify }},
    url: {{ post.url | jsonify }},
    id: {{count}}
});

//Iterate through the tags
{% for tg in post.tags %}
    if(tags.indexOf({{ tg | jsonify }}) < 0) {
        tags.push({{ tg | jsonify }})
    }
{% endfor %}

//Iterate through the SDGs
{% for cg in post.sdg %}
    if(sdg.indexOf({{ cg | jsonify }}) < 0) {
        sdg.push({{ cg | jsonify }})
    }
{% endfor %}

//Iterate through the Enablers
{% for ena in post.enablers %}
    if(enablers.indexOf({{ ena | jsonify }}) < 0) {
        enablers.push({{ ena | jsonify }})
    }
{% endfor %}

//Iterate through the Signature Solutions
{% for ss in post.signature_solutions %}
    if(signature_solutions.indexOf({{ ss | jsonify }}) < 0) {
        signature_solutions.push({{ ss | jsonify }})
    }
{% endfor %}

//Iterate through the RBLAC Priorities
{% for rp in post.rblac_priorities %}
    if(rblac_priorities.indexOf({{ rp | jsonify }}) < 0) {
        rblac_priorities.push({{ rp | jsonify }})
    }
{% endfor %}

{% endunless %}
{% assign count = count | plus: 1 %}
{% endfor %}


// builds reference data
var store = [{% for post in site.pages %}{
  "title": {{post.title | jsonify}},
  "url": {{ post.url | jsonify  }},
  "content": {{post.content | strip_html | jsonify}},
  "tags": {{ post.tags | jsonify }},
  "sdg": {{ post.sdg | jsonify }},
  "enablers": {{ post.enablers | jsonify }},
  "signature_solutions": {{ post.signature_solutions | jsonify }},
  "rblac_priorities": {{ post.rblac_priorities | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }},
  "id": {{ count }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]


// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var contentdiv = $('#content');

    var query = $(this).val();
    var result = index.search(query);
    resultdiv.empty();
    contentdiv.empty()
    
    // Add status
    resultdiv.prepend('<h6 class="">Found '+result.length+' result(s)</h6>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = `
      <div class="tertiary">
        <h5 class="" tabindex="0" data-viewport="false">
        <a href="{{site.baseurl}}${store[ref]?.url}">
            ${store[ref]?.title}
        </a>
        </h5>
        <p>
            ${store[ref].excerpt}
        </p>
    </div>
      `

      resultdiv.append(searchitem);
    }
  });
  

//POPULATE TAGS AND SDG FILTER
var tagsdiv = $('#tag-div');
var sdgdiv = $('#sdg-div')
var rblac_priorities_div = $('#rblac_priorities_div')
var enablers_div = $('#enablers_div')
var signature_solutions_div = $('#signature_solutions_div')

if(tags.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="tag">
        Tags
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < tags.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="tag${i+1}">${tags[i]?.toUpperCase()}</label>
                    <input
                        type="checkbox"
                        id="${tags[i]}"
                        name="tags"
                        value="${tags[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    tagsdiv.append(tg)
}

if(sdg.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="sdg">
        SDG
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < sdg.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="sdg${i+1}">${sdg[i]}</label>
                    <input
                        type="checkbox"
                        id="${sdg[i]}"
                        name="sdg"
                        value="${sdg[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    sdgdiv.append(tg)
}

if(enablers.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="enablers">
            Enablers
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < enablers.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="enablers${i+1}">${enablers[i]}</label>
                    <input
                        type="checkbox"
                        id="${enablers[i]}"
                        name="enablers"
                        value="${enablers[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    enablers_div.append(tg)
}

if(signature_solutions.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="signature_solutions">
            Signature Solutions
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < signature_solutions.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="signature_solutions${i+1}">${signature_solutions[i]}</label>
                    <input
                        type="checkbox"
                        id="${signature_solutions[i]}"
                        name="signature_solutions"
                        value="${signature_solutions[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    signature_solutions_div.append(tg)
}

if(rblac_priorities.length > 0){
    let tg = `
    <div class="multi-select" data-multi-select="">
        <button aria-label="Region" aria-expanded="false" data-id="rblac_priorities">
        RBLAC Priorities
        </button>
        <ul
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
        >
    `;

    for(let i = 0; i < rblac_priorities.length; i++) {
        tg += `
            <li role="option">
                <div class="form-check">
                    <label for="rblac_priorities${i+1}">${rblac_priorities[i]}</label>
                    <input
                        type="checkbox"
                        id="${rblac_priorities[i]}"
                        name="rblac_priorities"
                        value="${rblac_priorities[i]}"
                    />
                </div>
            </li>  
        `;
    }

    tg += `
            </ul>
        </div>
    `;

    rblac_priorities_div.append(tg)
}

let taglist = []
let sdglist = []
let enablerslist = []
let signature_solutionslist = []
let rblac_prioritieslist = []

let searchitemfn = post => `
<div class="tertiary">
    <h5 class="" tabindex="0" data-viewport="false">
    <a href="{{site.baseurl}}${post?.url}">
        ${post?.title}
    </a>
    </h5>
    <p>
        ${post.excerpt}
    </p>
</div>
`

let resultdiv = $('#results');
let contentdiv = $('#content');
let contentCopy = $("#content").html(); // Store the current content

let filterresult = () => {
    resultdiv.empty()
    resultdiv.prepend('<h6 class="">Showing results for  ' + [ ...taglist, ...signature_solutionslist, ...enablerslist, ...sdglist, ...rblac_prioritieslist, ].toString() + '</h6>');
    for(post of store){
        if(post?.tags?.some(tg => taglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.sdg?.some(tg => sdglist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.enablers?.some(tg => enablerslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.signature_solutions?.some(tg => signature_solutionslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
        else if(post?.rblac_priorities?.some(tg => rblac_prioritieslist.includes(tg) )){
            contentdiv.empty()
            var searchitem = searchitemfn(post)

            resultdiv.append(searchitem);
        }
    };
}

$(document).on('multiSelectInputToggle', (e) => {
    let { value, checked, name } = e.target;
    
    if(checked && name === 'tags') taglist.push(value)
    else if(checked && name === 'signature_solutions') signature_solutionslist.push(value)
    else if(checked && name === 'enablers') enablerslist.push(value)
    else if(checked && name === 'rblac_priorities') rblac_prioritieslist.push(value)
    else if(checked && name === 'sdg') sdglist.push(value)

    else if(!checked && name === 'signature_solutions' && signature_solutionslist.includes(value)) signature_solutionslist.splice(signature_solutionslist.indexOf(value), 1)
    else if(!checked && name === 'enablers' && enablerslist.includes(value)) enablerslist.splice(enablerslist.indexOf(value), 1)
    else if(!checked && name === 'rblac_priorities' && rblac_prioritieslist.includes(value)) rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(value), 1)
    else if(!checked && name === 'sdg' && sdglist.includes(value)) sdglist.splice(sdglist.indexOf(value), 1)
    else if(taglist.includes(value)) taglist.splice(taglist.indexOf(value), 1)
  
    filterresult()

});

$(document).on('filterSearchChipRemoval', (e) => {
    let textContent = e.target.getAttribute('option-name');
    sdglist.includes(textContent) && sdglist.splice(sdglist.indexOf(textContent), 1)
    taglist.includes(textContent) && taglist.splice(taglist.indexOf(textContent), 1)

    signature_solutionslist.includes(textContent) && signature_solutionslist.splice(signature_solutionslist.indexOf(textContent), 1)
    enablerslist.includes(textContent) && enablerslist.splice(enablerslist.indexOf(textContent), 1)
    rblac_prioritieslist.includes(textContent) && rblac_prioritieslist.splice(rblac_prioritieslist.indexOf(textContent), 1)
    filterresult()
});

$(document).on('filterSearchClear', (e) => {
    sdglist = [];
    taglist =  [];
    enablerslist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    resultdiv.empty()
    $("#content").html(contentCopy);
});

//GET ELEMTENTS WITH ID TAGS AND SDG
$('.tag-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    taglist = [ textContent ]
    sdglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.sdg-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    sdglist = [textContent]
    taglist = []
    enablerslist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.enablers-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = [textContent]
    taglist = []
    sdglist = []
    signature_solutionslist = []
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.signature_solutions-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ textContent]
    rblac_prioritieslist = []
    contentdiv.empty()
    filterresult()
} )

$('.rblac_priorities-chip').on('click', e =>{
    let textContent = e.target.getAttribute('text-value');
    enablerslist = []
    taglist = []
    sdglist = []
    signature_solutionslist = [ ]
    rblac_prioritieslist = [textContent]
    contentdiv.empty()
    filterresult()
} )

})