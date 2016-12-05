function Markdown(){
    var self = this;
}

Markdown.prototype.parse = function(input){
    let outcome = input;
    outcome = this.parseBold(outcome);
    outcome = this.parseItalic(outcome);
    outcome = this.parseHeading(outcome);
    outcome = this.parseImage(outcome);
    outcome = this.parseUl(outcome);
    outcome = this.parseOl(outcome);
    outcome = this.parseNewLine(outcome);
    console.log(outcome);
    return outcome;
}
// Parse Heading
Markdown.prototype.parseHeading = function(input){
    input = input.replace(/\#\#\#\#\#\#\s(.*)\n?/g, '<h6>$1</h6>');
    input = input.replace(/\#\#\#\#\#\s(.*)\n?/g, '<h5>$1</h5>');
    input = input.replace(/\#\#\#\#\s(.*)\n?/g, '<h4>$1</h4>');
    input = input.replace(/\#\#\#\s(.*)\n?/g, '<h3>$1</h3>');
    input = input.replace(/\#\#\s(.*)\n?/g, '<h2>$1</h2>');
    input = input.replace(/\#\s(.*)\n?/g, '<h1>$1</h1>');
    return input;
}
// Parse Bold
Markdown.prototype.parseBold = function(input){
    return input.replace(/\_\_(.*)\_\_/g, '<b>$1</b>');
}
// Parse Italic
Markdown.prototype.parseItalic = function(input){
    return input.replace(/\*(.*)\*/g, '<i>$1</i>');
}
// Parse Image
Markdown.prototype.parseImage = function(input){
    return input.replace(/!\[(.*)\]\((.*)\)/g, '<img src="$2" alt="$1" />')
}
// Parse New Line
Markdown.prototype.parseNewLine = function(input){
    return input.replace(/\s\s/g, '<br />');
}

// Parse the Bullet List (Alpha) && Numeric List
Markdown.prototype.parseUl = function(input){
    var reGroup = /(((\+\s)(.*)(\n))+)/g;
    var output = input;
    
    output = output.replace(reGroup, '<ul>$1</ul>');
    output = output.replace(/(\+\s)(.*)(\n)/g, '<li>$2</li>');
    return output;
}
Markdown.prototype.parseOl = function(input){
    var reGroup = /(((\d\.\s)(.*)(\n))+)/g;
    var output = input;
    
    output = output.replace(reGroup, '<ol>$1</ol>');
    output = output.replace(/(\d\.\s)(.*)(\n)/g, '<li>$2</li>');
    return output;
}

var markdown = new Markdown();