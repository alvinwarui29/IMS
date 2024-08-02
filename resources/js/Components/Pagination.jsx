import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                preserveScroll
                    className={`inline-block py-2 px-3 rounded-lg text-gray-200 text-xs 
        ${link.active ? "bg-gray-950" : "text-gray-700"}
        ${
            !link.url ? "text-gray-500 cursor-not-allowed" : "hover:bg-gray-950"
        }`}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
};

export default Pagination;
