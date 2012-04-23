﻿

namespace KendoUI.Mvc.Infrastructure.Implementation
{
    using System.Collections.Generic;
    
    internal class ReleaseWebAssetExtensions : IWebAssetExtensions
    {
        public IEnumerable<string> JavaScript
        {
            get
            {
                return WebAssetDefaultSettings.ReleaseJavaScriptExtensions;
            }
        }
        
        public IEnumerable<string> Css
        {
            get
            {
                return WebAssetDefaultSettings.ReleaseCssExtensions;
            }
        }
    }
}
