


function Sidebar({children}) {
    return (
        <aside className="row-start-1 row-span-2 min-h-screen bg-secondary-0 px-2 py-4">
            <ul className="flex flex-col gap-y-1">
            
                {children}
                
                
            </ul>
        </aside>
    );
}

export default Sidebar;