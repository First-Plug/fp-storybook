import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as s,e as c,u as S}from"./index-BZkcKs8Z.js";import{b as y,S as w,C as b}from"./select-label-Cyna6bob.js";import{c as D}from"./createLucideIcon-BNPQLea_.js";import"./index-D4lIrffr.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],B=D("calendar",C),k={title:"Components/Select/SelectTrigger",component:y,tags:["autodocs"],decorators:[e=>t.jsx(w,{value:"",onChange:()=>{},children:t.jsx(e,{})})],argTypes:{placeholder:{control:"text"},icon:{control:!1,description:"Icon component to show on the right side"}}},n={args:{placeholder:"Select an option",icon:t.jsx(b,{className:"h-4 w-4 text-gray-500"})},play:async({canvasElement:e})=>{const a=s(e).getByRole("textbox");await c(a).toBeInTheDocument(),await c(a).toHaveAttribute("placeholder","Select an option"),await S.click(a)}},r={args:{placeholder:"Select a date...",icon:t.jsx(B,{className:"h-4 w-4 text-gray-500"})},play:async({canvasElement:e})=>{const a=s(e).getByRole("textbox");await c(a).toBeInTheDocument()}},o={render:e=>t.jsx(w,{value:"",onChange:()=>{},disabled:!0,children:t.jsx(y,{...e,icon:t.jsx(b,{className:"h-4 w-4 text-gray-400"})})}),args:{placeholder:"Disabled trigger"},play:async({canvasElement:e})=>{const a=s(e).getByRole("textbox");await c(a).toHaveAttribute("aria-disabled","true")}};var l,g,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    icon: <ChevronDown className="h-4 w-4 text-gray-500" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toBeInTheDocument();
    await expect(trigger).toHaveAttribute("placeholder", "Select an option");
    await userEvent.click(trigger);
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a date...",
    icon: <Calendar className="h-4 w-4 text-gray-500" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toBeInTheDocument();
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,u,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Select value="" onChange={() => {}} disabled>
      <SelectTrigger {...args} icon={<ChevronDown className="h-4 w-4 text-gray-400" />} />
    </Select>,
  args: {
    placeholder: "Disabled trigger"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toHaveAttribute("aria-disabled", "true");
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const N=["Default","CustomIcon","Disabled"];export{r as CustomIcon,n as Default,o as Disabled,N as __namedExportsOrder,k as default};
