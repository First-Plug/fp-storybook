import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as D,e as o,u as x}from"./index-BZkcKs8Z.js";import{a as C}from"./index-B-lxVbXh.js";import{S as l,a as r,b as p,c as d,d as n}from"./select-label-Cyna6bob.js";import{r as y}from"./index-D4lIrffr.js";import"./v4-CtRu48qb.js";import"./createLucideIcon-BNPQLea_.js";const z={title:"Components/Select/Select",component:l,tags:["autodocs"],argTypes:{children:{control:!1,description:"`<SelectLabel>, <SelectTrigger>, <SelectOptions>`"},disabled:{control:"boolean"},searchable:{control:"boolean"},color:{control:"radio",options:["error","success","grey"]},onChange:{action:"changed"}}},I=()=>{const[a,t]=y.useState("1");return e.jsxs(l,{value:a,onChange:t,children:[e.jsx(r,{children:"Choose an option"}),e.jsx(p,{placeholder:"Select an option"}),e.jsxs(d,{children:[e.jsx(n,{value:"1",children:"Option 1"}),e.jsx(n,{value:"2",children:"Option 2"}),e.jsx(n,{value:"3",children:"Option 3"})]})]})},s={render:()=>e.jsx(I,{}),play:async({canvasElement:a})=>{const t=D(a),u=t.getByRole("textbox");await o(u).toBeInTheDocument();const E=t.getByText("Option 1");await o(E).toBeInTheDocument(),await x.click(u);const h=t.getByRole("list");await o(h).toBeVisible();const m=t.getByText("Option 2");await o(m).toBeInTheDocument(),await x.click(m),await o(h).not.toBeVisible(),await o(t.getByText("Option 2")).toBeInTheDocument()}},f=()=>{const[a,t]=y.useState("2");return e.jsxs(l,{value:a,onChange:t,children:[e.jsx(r,{children:"Choose an option"}),e.jsx(p,{placeholder:"Select an option"}),e.jsxs(d,{children:[e.jsx(n,{value:"1",children:"Option 1"}),e.jsx(n,{value:"2",children:"Option 2"}),e.jsx(n,{value:"3",children:"Option 3"})]})]})},i={render:()=>e.jsx(f,{})},c={render:()=>e.jsxs(l,{value:"1",onChange:C("onChange"),disabled:!0,children:[e.jsx(r,{children:"Disabled Select"}),e.jsx(p,{placeholder:"Select disabled"}),e.jsxs(d,{children:[e.jsx(n,{value:"1",children:"Option 1"}),e.jsx(n,{value:"2",children:"Option 2"}),e.jsx(n,{value:"3",children:"Option 3"})]})]})};var S,g,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <SelectWithState />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByRole("textbox");
    await expect(selectElement).toBeInTheDocument();
    const triggerElement = canvas.getByText("Option 1");
    await expect(triggerElement).toBeInTheDocument();
    await userEvent.click(selectElement);
    const optionsList = canvas.getByRole("list");
    await expect(optionsList).toBeVisible();
    const option2 = canvas.getByText("Option 2");
    await expect(option2).toBeInTheDocument();
    await userEvent.click(option2);
    await expect(optionsList).not.toBeVisible();
    await expect(canvas.getByText("Option 2")).toBeInTheDocument();
  }
}`,...(O=(g=s.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var v,j,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SelectWithCustomInitialState />
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var B,w,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Select value="1" onChange={action("onChange")} disabled>
      <SelectLabel>Disabled Select</SelectLabel>
      <SelectTrigger placeholder="Select disabled" />
      <SelectOptions>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const A=["Default","WithInitialValue","Disabled"];export{s as Default,c as Disabled,i as WithInitialValue,A as __namedExportsOrder,z as default};
