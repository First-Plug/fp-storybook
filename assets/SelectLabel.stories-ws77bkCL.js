import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as u,e as p}from"./index-BZkcKs8Z.js";import{a as r,S as h}from"./select-label-Cyna6bob.js";import"./index-D4lIrffr.js";import"./createLucideIcon-BNPQLea_.js";const T={title:"Components/Select/SelectLabel",component:r,tags:["autodocs"]},a={render:e=>t.jsx(h,{value:"1",onChange:()=>{},children:t.jsx(r,{...e})}),args:{children:"Label Text"},play:async({canvasElement:e})=>{const s=u(e).getByText("Label Text");await p(s).toBeInTheDocument()}},n={render:e=>t.jsx(h,{value:"1",onChange:()=>{},children:t.jsx(r,{...e})}),args:{children:"Required Field",required:!0},play:async({canvasElement:e})=>{const s=u(e).getByText("Required Field*");await p(s).toBeInTheDocument()}};var c,l,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Select value="1" onChange={() => {}}>
      <SelectLabel {...args} />
    </Select>,
  args: {
    children: "Label Text"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Label Text");
    await expect(label).toBeInTheDocument();
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Select value="1" onChange={() => {}}>
      <SelectLabel {...args} />
    </Select>,
  args: {
    children: "Required Field",
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelWithAsterisk = canvas.getByText("Required Field*");
    await expect(labelWithAsterisk).toBeInTheDocument();
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const q=["Default","Required"];export{a as Default,n as Required,q as __namedExportsOrder,T as default};
