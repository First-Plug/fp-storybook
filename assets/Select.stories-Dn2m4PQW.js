import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as S,e as t,u as r}from"./index-BZkcKs8Z.js";import{a as h}from"./index-B-lxVbXh.js";import{S as u,a as d,b as O,c as v,d as c}from"./select-label-Cyna6bob.js";import"./v4-CtRu48qb.js";import"./index-D4lIrffr.js";import"./createLucideIcon-BNPQLea_.js";const f={title:"Components/Select/Select",component:u,tags:["autodocs"],argTypes:{children:{control:!1,description:"`<SelectLabel>, <SelectTrigger>, <SelectOptions>`"},disabled:{control:"boolean"},searchable:{control:"boolean"},color:{control:"radio",options:["error","success","grey"]},onChange:{action:"changed"}}},o={args:{value:"1",onChange:h("onChange")},render:a=>e.jsxs(u,{...a,children:[e.jsx(d,{children:"Choose an option"}),e.jsx(O,{}),e.jsxs(v,{children:[e.jsx(c,{value:"1",children:"Option 1"}),e.jsx(c,{value:"2",children:"Option 2"}),e.jsx(c,{value:"3",children:"Option 3"})]})]}),play:async({canvasElement:a})=>{const n=S(a),i=n.getByRole("textbox");await t(i).toBeInTheDocument();const x=n.getByText("Option 1");await t(x).toBeInTheDocument(),await r.click(i);const s=n.getByRole("list");await t(s).toBeVisible();const l=n.getByText("Option 2");await t(l).toBeInTheDocument(),await r.click(l),await t(s).not.toBeVisible()}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "1",
    onChange: action("onChange")
  },
  render: args => <Select {...args}>
      <SelectLabel>Choose an option</SelectLabel>
      <SelectTrigger />
      <SelectOptions>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>,
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
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,f as default};
