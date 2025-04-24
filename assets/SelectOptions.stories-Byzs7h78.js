import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w,u as r,e as a}from"./index-BZkcKs8Z.js";import{a as g}from"./index-B-lxVbXh.js";import{c as l,S as h,b as m,d as o}from"./select-label-Cyna6bob.js";import"./v4-CtRu48qb.js";import"./index-D4lIrffr.js";import"./createLucideIcon-BNPQLea_.js";const k={title:"Components/Select/SelectOptions",component:l,tags:["autodocs"],argTypes:{children:{control:!1,description:"SelectOption components"},className:{control:"text",description:"Additional CSS classes"},emptyMessage:{control:"text",description:"Message shown when no options are available"}}},s={render:t=>e.jsxs(h,{value:"1",onChange:g("onChange"),children:[e.jsx(m,{placeholder:"Select an option"}),e.jsxs(l,{...t,children:[e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"}),e.jsx(o,{value:"4",children:"Option 4"}),e.jsx(o,{value:"5",children:"Option 5"})]})]}),play:async({canvasElement:t})=>{const n=w(t),p=n.getByRole("textbox");await r.click(p);const j=n.getAllByRole("listitem");await a(j).toHaveLength(5),await a(n.getByText("Option 1")).toBeInTheDocument(),await a(n.getByText("Option 2")).toBeInTheDocument(),await a(n.getByText("Option 3")).toBeInTheDocument();const C=n.getByText("Option 2");await r.click(C)}},c={render:t=>e.jsxs(h,{value:"",onChange:g("onChange"),children:[e.jsx(m,{placeholder:"Select an option"}),e.jsx(l,{...t,emptyMessage:"No hay opciones disponibles"})]}),play:async({canvasElement:t})=>{const n=w(t),p=n.getByRole("textbox");await r.click(p),await a(n.getByText("No hay opciones disponibles")).toBeInTheDocument()}},i={render:t=>e.jsxs(h,{value:"1",onChange:g("onChange"),children:[e.jsx(m,{placeholder:"Select an option"}),e.jsxs(l,{...t,className:"max-h-[200px]",children:[e.jsx(o,{value:"1",children:"Option 1"}),e.jsx(o,{value:"2",children:"Option 2"}),e.jsx(o,{value:"3",children:"Option 3"})]})]})};var u,x,O;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Select value="1" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args}>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
        <SelectOption value="4">Option 4</SelectOption>
        <SelectOption value="5">Option 5</SelectOption>
      </SelectOptions>
    </Select>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await userEvent.click(trigger);
    const options = canvas.getAllByRole("listitem");
    await expect(options).toHaveLength(5);
    await expect(canvas.getByText("Option 1")).toBeInTheDocument();
    await expect(canvas.getByText("Option 2")).toBeInTheDocument();
    await expect(canvas.getByText("Option 3")).toBeInTheDocument();
    const option2 = canvas.getByText("Option 2");
    await userEvent.click(option2);
  }
}`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var d,S,v;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Select value="" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args} emptyMessage="No hay opciones disponibles" />
    </Select>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await userEvent.click(trigger);
    await expect(canvas.getByText("No hay opciones disponibles")).toBeInTheDocument();
  }
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,B,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Select value="1" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args} className="max-h-[200px]">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const M=["Default","Empty","WithCustomClass"];export{s as Default,c as Empty,i as WithCustomClass,M as __namedExportsOrder,k as default};
