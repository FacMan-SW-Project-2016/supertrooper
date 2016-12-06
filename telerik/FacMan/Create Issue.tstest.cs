using Telerik.TestingFramework.Controls.KendoUI;
using Telerik.WebAii.Controls.Html;
using Telerik.WebAii.Controls.Xaml;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

using ArtOfTest.Common.UnitTesting;
using ArtOfTest.WebAii.Core;
using ArtOfTest.WebAii.Controls.HtmlControls;
using ArtOfTest.WebAii.Controls.HtmlControls.HtmlAsserts;
using ArtOfTest.WebAii.Design;
using ArtOfTest.WebAii.Design.Execution;
using ArtOfTest.WebAii.ObjectModel;
using ArtOfTest.WebAii.Silverlight;
using ArtOfTest.WebAii.Silverlight.UI;

namespace FacMan
{

    public class Create_Issue : BaseWebAiiTest
    {
        #region [ Dynamic Pages Reference ]

        private Pages _pages;

        /// <summary>
        /// Gets the Pages object that has references
        /// to all the elements, frames or regions
        /// in this project.
        /// </summary>
        public Pages Pages
        {
            get
            {
                if (_pages == null)
                {
                    _pages = new Pages(Manager.Current);
                }
                return _pages;
            }
        }

        #endregion
        
        // Add your test methods here...
    
        [CodedStep(@"Desktop command: LeftClick on BuildingDropdownDiv and Select Value 1")]
        public void Create_Issue_CodedStep()
        {
            // Desktop command: LeftClick on RoomDropdownDiv
            //Find.ByName<HtmlDivHtmlInputSearch>("building").SetValue("", 1);
            Find.ById<HtmlDiv>("buildingDropdown").MouseClick(MouseClickType.LeftClick);
        }
    
        [CodedStep(@"Desktop command: LeftClick on RoomDropdownDiv")]
        public void Create_Issue_CodedStep1()
        {
            // Desktop command: LeftClick on RoomDropdownDiv
            //Pages.FacManMeldungserfassung.RoomDropdownDiv.Wait.ForExists(30000);
            //Pages.FacManMeldungserfassung.RoomDropdownDiv.MouseClick(ArtOfTest.WebAii.Core.MouseClickType.LeftClick, 0, 0, ArtOfTest.Common.OffsetReference.AbsoluteCenter);
            Find.ById<HtmlDiv>("roomDropdown").MouseClick(MouseClickType.LeftClick);
        }
    
        [CodedStep(@"Desktop command: LeftClick on CategoryDropdownDiv")]
        public void Create_Issue_CodedStep2()
        {
            // Desktop command: LeftClick on CategoryDropdownDiv
            //Pages.FacManMeldungserfassung.CategoryDropdownDiv.Wait.ForExists(30000);
            //Pages.FacManMeldungserfassung.CategoryDropdownDiv.MouseClick(ArtOfTest.WebAii.Core.MouseClickType.LeftClick, 0, 0, ArtOfTest.Common.OffsetReference.AbsoluteCenter);
            Find.ById<HtmlDiv>("categoryDropdown").MouseClick(MouseClickType.LeftClick);
        }
    }
}
