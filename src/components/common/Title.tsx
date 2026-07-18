interface Props{
    subtitle:string;
    title:string;
}

export default function Title({subtitle,title}:Props){

return(

<div className="mb-16">

<p className="uppercase tracking-[0.4em] text-amber-400">
{subtitle}
</p>

<h2 className="mt-4 text-5xl font-black">
{title}
</h2>

</div>

)

}