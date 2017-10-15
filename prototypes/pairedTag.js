class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  buildAttrString() {
    return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
  }

  toString() {
    return [`<${this.name}${this.buildAttrString()}>`,
      `${this.body}${this.children.join('')}`,
      `</${this.name}>`,
    ].join('');
  }
}
export default PairedTag;
