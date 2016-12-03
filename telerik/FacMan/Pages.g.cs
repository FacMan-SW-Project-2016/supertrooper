//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FacMan
{
    using ArtOfTest.WebAii.Core;
    using ArtOfTest.WebAii.ObjectModel;
    using ArtOfTest.WebAii.TestAttributes;
    using ArtOfTest.WebAii.TestTemplates;
    using ArtOfTest.WebAii.Controls.HtmlControls;
    
    public class Pages
    {
        private Manager _manager;
        public Pages(Manager manager)
        {
            _manager = manager;
        }
        /// <summary>
        /// Page : http://localhost/login.html 
        /// </summary>
        public FacManLoginPage FacManLogin
        {
            get
            {
                return new FacManLoginPage("http://localhost/login.html", _manager.ActiveBrowser.Find);
            }
        }
        public class FacManLoginPage : HtmlPage
        {
            public FacManLoginPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' username] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText UsernameText
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText>("name=username", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' password] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputPassword PasswordPassword
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputPassword>("name=password", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' LoginButton] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv LoginButtonDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=LoginButton", "tagname=div");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression UsernameText = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=username", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression PasswordPassword = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=password", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression LoginButtonDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=LoginButton", "tagname=div");
            }
        }
    }
    public class Applications
    {
        private Manager _manager;
        public Applications(Manager manager)
        {
            _manager = manager;
        }
    }
}
