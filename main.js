var extraFieldStyle = document.createElement('style')
document.head.append(extraFieldStyle);
extraFieldStyle.innerHTML = ".ghx-extra-field{font-size: 9px !important} .ghx-end {font-size: 9px !important}"


var issues = document.getElementsByClassName("js-issue");

for (i = 0; i < issues.length; i++) {
    var issue = issues[i];
    var content_holder = issue.getElementsByClassName("ghx-issue-content")[0].getElementsByClassName("ghx-summary")[0];
    var content = content_holder.innerHTML;
    var extra_fields_holder = issue.getElementsByClassName("ghx-plan-extra-fields")[0];
    extra_fields_holder.style.fontSize = "xx-small";
    var extra_fields = extra_fields_holder.innerHTML.replace(/·/g, ' · ');
    content_holder.innerHTML = extra_fields + '<span class="ghx-extra-field-seperator"> · </span>' + content;
    issue.getElementsByClassName("ghx-plan-extra-fields")[0].remove();
    console.log("item deleted");
}