function getIssues() {
	var url='https://api.github.com/repos/ShereenMessi/javascript-fetch-lab/issues';
	
	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json=> showIssues(json));

}

function showIssues(json) {
	var html=document.getElementById('issues-template').innerHTML;
	var applyTemplate=Handlebars.compile(html);
	document.getElementById('issues').innerHTML=applyTemplate(json);
}

function createIssue() {
	var url='https://api.github.com/repos/ShereenMessi/javascript-fetch-lab/issues';
	const postData = {
		body: document.getElementById('body').value,
		title: document.getElementById('title').value
	};	
	fetch(url, {
		method: 'post',
		body: JSON.stringify(postData),
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json=> getIssues());

}

function showResults(json) {
	var html=document.getElementById('repo-template').innerHTML;
	var applyTemplate=Handlebars.compile(html);
	document.getElementById('results').innerHTML=applyTemplate(json);
}

function forkRepo() {
	const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  var url=`https://api.github.com/repos/${repo}/forks`
  fetch(url, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => getIssues());
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
