﻿

namespace KendoUI.Mvc.UI
{
    using System.Web.Mvc;
    
    public interface IGridActionResultAdapterFactory
    {
        IGridActionResultAdapter Create(ActionResult actionResult);
    }
}
