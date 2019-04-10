import re

s = r'03-17 16:13:38.811  1702  2395 D WindowManager: printFreezingDisplayLogsopening app wtoken = AppWindowToken{9f4ef63 token=Token{a64f992 ActivityRecord{de9231d u0 com.tencent.qt.qtl/.activity.info.NewsDetailXmlActivity t761}}}, allDrawn= false, startingDisplayed =  false, startingMoved =  false, isRelaunching =  false'

l = [r'(/[\w-]+)+', r'([\w-]+\.){2,}[\w-]+', r'\b(\-?\+?\d+)\b|\b0[Xx][a-fA-F\d]+\b|\b[a-fA-F\d]{4,}\b']

for i in l:
    ll = re.findall(i,s)
    print(ll)
#rr = re.sub(r'(C:\\W*)+', r'<*>', s)

#rrr = re.sub(r'([C:]+)', r'<*>', rr)
#print(rr)
#print(s)
